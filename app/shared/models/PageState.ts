export class PageState {}

export class Loading extends PageState {}

export class Error extends PageState {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class Success extends PageState {
  constructor() {
    super();
  }
}
