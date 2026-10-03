/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "John Smith";
const age = 54;
const studyField = "Algebra";

const participant = {
  name,
  age,
  studyField,
};

console.log(`Participant: ${name} - Age: ${age} - Field: ${studyField}`);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantCopy = {
  ...participant,
  displayInfo() {
    console.log(
      `Copy Participant: ${this.name} - Age: ${this.age} - Field: ${this.studyField}`,
    );
  },
};

participantCopy.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantCopyArrow = {
  ...participant,
  displayInfo: () => {
    console.log(
      `Arrow Participant: ${this.name} - Age: ${this.age} - Field: ${this.studyField}`,
    );
  },
};

participantCopyArrow.displayInfo();
/*
 * Observations: The arrow funtion does not have a 'this' in the scope so it cannot access the participant object properites. Instead it looks to the global scope to find the properties. The values are not defined in the global scope, so undefined is returned.
 * TODO: Explain here.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(participant, key, value) {
  return {
    ...participant,
    [key]: value,
  };
}

const updatedParticipant = updateParticipantInfo(
  participant,
  "Occupation",
  "Mathematician",
);
console.log(updatedParticipant);
