$(document).ready(function () {
  $("#myForm").submit(function (event) {
      event.preventDefault();

      var input = $("#myInput").val();
      var container = $(".container");

      if (input === "") {
          alert("Fill in the task form");
          return;
      }

      var contentDiv = $("<div>").addClass("content").attr("id", "content");
      var secondDiv = $("<div>").attr("id", "first-block");

      contentDiv.append(secondDiv);
      container.append(contentDiv);

      var inputSpace = $("<input>").attr({
          type: "text",
          id: "First-prompt",
          readonly: true,
      }).addClass("tasks").val(input);

      secondDiv.append(inputSpace);

      var deleteBtn = $("<button>").addClass("button-27").attr("role", "button").text("Delete");
      var editBtn = $("<button>").addClass("button-24").attr("role", "button").text("Edit");

      secondDiv.append(editBtn);
      secondDiv.append(deleteBtn);

      editBtn.click(function () {
          if (editBtn.text() === "Edit") {
              inputSpace.removeAttr("readonly");
              editBtn.text("Done");
          } else {
              inputSpace.attr("readonly", true);
              editBtn.text("Edit");
          }
      });

      deleteBtn.click(function () {
          contentDiv.remove();
      });
  });
});
