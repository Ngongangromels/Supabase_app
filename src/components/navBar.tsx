
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

 function NavBar() {
  return (

         <Navbar className=" w-full fixed top-0 bg-gray-400"  fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movies App</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" >Home</Navbar.Link>
          <Navbar.Link ><Link to={'/SignUp'}> Sign Up</Link></Navbar.Link>
          <Navbar.Link ><Link to={'/LoginPage'}> Login</Link></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    
  );
}
export default NavBar