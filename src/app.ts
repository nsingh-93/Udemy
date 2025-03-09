// Project Type
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
type Listener = (items: Project[]) => void;

class ProjectState {
  private projects: Project[] = [];
  private listeners: Listener[] = [];
  private static instance: ProjectState;

  //*** This is how to implement a singleton constructor
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }
  //***

  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, desc: string, numPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      desc,
      numPeople,
      ProjectStatus.Active
    );

    this.projects.push(newProject);

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// global instance to be used in entire file
const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatbleInput: Validatable) {
  let isValid = true;

  if (validatbleInput.required) {
    isValid = isValid && validatbleInput.value.toString().trim().length !== 0;
  }

  if (
    validatbleInput.minLength != null &&
    typeof validatbleInput.value === "string"
  ) {
    isValid =
      isValid && validatbleInput.value.length >= validatbleInput.minLength;
  }

  if (
    validatbleInput.maxLength != null &&
    typeof validatbleInput.value === "string"
  ) {
    isValid =
      isValid && validatbleInput.value.length <= validatbleInput.maxLength;
  }

  if (
    validatbleInput.min != null &&
    typeof validatbleInput.value === "number"
  ) {
    isValid = isValid && validatbleInput.value >= validatbleInput.min;
  }

  if (
    validatbleInput.max != null &&
    typeof validatbleInput.value === "number"
  ) {
    isValid = isValid && validatbleInput.value <= validatbleInput.max;
  }

  return isValid;
}

// autobind decorator
function Autobind(
  _: any, // target
  _2: string, // methodName
  descriptor: PropertyDescriptor
) {
  const origMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = origMethod.bind(this);

      return boundFn;
    },
  };

  return adjDescriptor;
}

// ProjectList class
class ProjectList {
  templateElement: HTMLTemplateElement;

  hostElement: HTMLDivElement;

  element: HTMLElement;

  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;

    this.hostElement = document.getElementById("app") as HTMLDivElement;
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;

    listEl.innerHTML = "";

    for (const prjItem of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = prjItem.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;

    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

// ProjectInput class
class ProjectInput {
  templateElement: HTMLTemplateElement;

  hostElement: HTMLDivElement; // Can also be HTMLElement

  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;

    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDesc = this.descInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descValidatable: Validatable = {
      value: enteredDesc,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, try again");
      return;
    } else {
      return [enteredTitle, enteredDesc, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInput();
    }
  }

  private configure() {
    // this.element.addEventListener("submit", this.submitHandler.bind(this));
    // Need to use bind when calling the submit handler because
    // the instance of this changes when passing control to handler function
    // or we can use decorator to auto bind it like with below
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
