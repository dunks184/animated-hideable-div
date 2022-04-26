import { LightningElement } from "lwc";

export default class App extends LightningElement {

  isSameAsAbove = false;
  areFieldsVisible = true;

  handleToggle(event) {
    this.isSameAsAbove = event.target.checked;
    let box = this.template.querySelector('.box');
    box.className = this.isSameAsAbove ? "box closed" : "box open";
  }

  handleClick() {
    this.template.querySelectorAll('lightning-input').forEach(field => {
      console.log(field.label);
    });
  }

  fillForm() {
    this.template.querySelectorAll('lightning-input').forEach(field => {
      field.value = field.label;
    });
  }

  handleTransitionStart(event) {
    const state = event.target.className;
    if (state === 'box open') {
      this.areFieldsVisible = true;
    }
  }
  handleTransitionEnd(event) {
    const state = event.target.className;
    if (state === 'box closed') {
      this.areFieldsVisible = false;
    }
  }

}
