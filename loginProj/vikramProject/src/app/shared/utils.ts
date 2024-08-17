export function checkCandidateAccess() {
  const role = localStorage.getItem('role');
  return role && role?.toLocaleLowerCase().trim().includes('candidate');
}
export function checkHrAccess() {
  const role = localStorage.getItem('role');
  return role && role?.toLocaleLowerCase().trim().includes('hr');
}
