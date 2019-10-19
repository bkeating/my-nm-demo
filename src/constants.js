const GENDER_CHOICES = [
  { id: 1, title: 'Female' },
  { id: 2, title: 'Male' },
  { id: 3, title: 'Gender fluid' },
  { id: 4, title: 'Non-binary / Third gender' },
  { id: 5, title: 'Prefer to self-describe' },
  { id: 6, title: 'Prefer not to say' }
];

const FORM_FIELDS = [
  { id: 1, label: 'First Name', name: 'firstName', type: 'text' },
  { id: 2, label: 'Last Name', name: 'lastName', type: 'text' },
  { id: 3, label: 'Gender', name: 'gender', type: 'select', options: GENDER_CHOICES },
  { id: 4, label: 'Line 1', name: 'addressLine1', type: 'text' },
  { id: 5, label: 'Line 2', name: 'addressLine2', type: 'text' },
  { id: 6, label: 'City', name: 'addressCity', type: 'text' },
  { id: 7, label: 'State', name: 'addressState', type: 'text' },
  { id: 8, label: 'Zip', name: 'addressZip', type: 'text' }
];

const CHILD_FORM_FIELDS = [
  { id: 1, label: 'First Name', name: 'firstName', type: 'text' },
  { id: 2, label: 'Last Name', name: 'lastName', type: 'text' },
  { id: 3, label: 'Gender', name: 'gender', type: 'select', options: GENDER_CHOICES },
  { id: 4, label: 'Date of Birth', name: 'dateOfBirth', type: 'date' }
];

export default FORM_FIELDS;
export { CHILD_FORM_FIELDS };
