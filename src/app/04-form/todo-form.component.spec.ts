import { FormBuilder } from "@angular/forms"
import { TodoFormComponent } from "./todo-form.component";

describe('Todo-form', () => {
    var component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    })

    it('should create a form with 2 controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    })

    it('should make the name control require', () => {
        let nameControl = component.form.get('name');
        let emailControl = component.form.get('email');
        
        nameControl.setValue('');
        emailControl.setValue('');

        expect(nameControl.valid).toBeFalsy();
        expect(emailControl.valid).toBeFalsy();

        nameControl.setValue('thesea');
        emailControl.setValue('thesea@example.com');

        expect(nameControl.valid).toBeTruthy();
        expect(emailControl.valid).toBeTruthy();
    })
})