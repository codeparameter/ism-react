import { redirect } from "react-router-dom";

export default function reDirPrevOrHome() {
    
  const urlParams = new URLSearchParams(window.location.search);
  const prev = urlParams.get('prev');
  return prev? redirect(prev) : redirect('/');
    
};
