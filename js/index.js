$(document).ready(function() {
	  //The modal properties for quick guide button
	  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .6, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      // ready: function() { alert('Ready'); }, // Callback for Modal open
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });	

})