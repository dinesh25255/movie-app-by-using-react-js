import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";

const Header = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/searchmovie/${val.query}`);
      resetForm();
    }
  });
  const [show, setShow] = useState(false);

  return (
    <header className="bg-black  text-white flex justify-between px-7 py-2 items-baseline pt-5">
      <div>
        <NavLink to='/' replace> <h1 className="text-xl mb-2">Sample Web</h1></NavLink>

        {show && <nav className="flex flex-col space-y-2 ">
          <NavLink to='/infoForm'>AddForm</NavLink>

        </nav>
        }



      </div>


      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden sm:flex"></i> : <i className="fa-solid fa-bars hidden sm:flex"></i>}

      </button>
      <nav className="sm:hidden space-x-5 flex items-center ">
        <NavLink to='/movie/popular'>Popular</NavLink>
        <NavLink to='/movie/top_rated'>Top_Rated</NavLink>
        <NavLink to='/movie/upcoming'>Upcoming</NavLink>
        <form onSubmit={formik.handleSubmit}>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              type="submit"
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </form>
      </nav>
    </header>
  )
}
export default Header