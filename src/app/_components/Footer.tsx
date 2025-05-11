export function Footer() {
  return (
    <footer className="flex flex-row justify-between">
      <div className="flex">
        &copy; {new Date().getFullYear()} AORUX. All rights reserved.
      </div>
      <div className="flex">Privacy Policy | Terms of Service</div>
    </footer>
  );
}
