// Verify if the user is major
export default function majorDate() {
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
}
