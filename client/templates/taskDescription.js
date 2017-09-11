import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

Template.actions.events({
  'click #addTaskDescription, keypress input' (event) {
    if (event.which === 13 || event.type === 'click') {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = $('#taskDescriptionInput').val();
      //const parent = $("#selectTask").find(":selected").val();

      // Insert a task into the collection
      /*Tasks.update({
        content: text,
        parent: parent,
        date: new Date(),
        isImportant: isImportant,
      });*/

      // Clear form
      $('#taskDescriptionInput').val("");
    }
  },
});