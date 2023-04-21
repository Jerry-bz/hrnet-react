import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getEmployee } from "../features/employee.slice";
import { states } from "../utils/states.select";
import { departments } from "../utils/departments.select";
import LogoEntreprise from "../assets/logo.entreprise.jpg";
import Modal from "modal-validation-react";
import "../styles/home.css";

/**
 * Form to create a new employee
 * @Component - Home
 * @returns {JSX.Component}
 */

export default function Home() {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const dispatch = useDispatch();

  // Date Picker
  const [dateBirth, setDateBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  //  Modal to display the employee created
  const [modal, setModal] = useState(false);

  // Get the data of the employee created
  const [employeesData, setEmployeesData] = useState({});

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="home">
      <div className="home-container">
        <img
          className="home-img"
          src={LogoEntreprise}
          alt="logo-entreprise"
        ></img>
        <Link to="/employees">
          <h3>View Current Employees</h3>
        </Link>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data, "data");
            dispatch(getEmployee(data));
            reset();
            setEmployeesData(data);
            setModal(true);
          })}
          action="#"
          id="create-employee-form"
        >
          <div className="home-informations">
            <label>First Name</label>
            <input
              type="text"
              {...register("firstName", {
                required: "The firstname is required",
                minLength: { value: 3, message: "The firstname is too short" },
              })}
            />
            {errors.firstName && (
              <div className="home-message">{errors.firstName.message}</div>
            )}
          </div>
          <div className="home-informations">
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastName", {
                required: "The lastname is required",
                minLength: { value: 3, message: "The lastname is too short" },
              })}
            />
            {errors.lastName && (
              <div className="home-message">{errors.lastName.message}</div>
            )}
          </div>
          <div className="home-informations">
            <label>Date of Birth</label>
            <DatePicker
              required={true}
              selected={dateBirth}
              onChange={(date) => {
                setDateBirth(date);
                setValue("dateOfBirth", date.toLocaleDateString());
              }}
            />
          </div>
          <div className="home-informations">
            <label>Start Date</label>
            {/* Date Picker is a custom component from react-datepicker */}
            <DatePicker
              required={true}
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                // setValue is used to set the value of the input
                setValue("startDate", date.toLocaleDateString());
              }}
            />
          </div>
          <fieldset className="home-address">
            <legend>Address</legend>
            <label>Street</label>
            <input
              type="text"
              {...register("street", {
                required: "The street is required",
                minLength: { value: 3, message: "The street is too short" },
              })}
            />
            {errors.street && (
              <div className="home-message">{errors.street.message}</div>
            )}
            <label>City</label>
            <input
              type="text"
              {...register("city", {
                required: "The city is required",
                minLength: { value: 3, message: "The city is too short" },
              })}
            />
            {errors.city && (
              <div className="home-message">{errors.city.message}</div>
            )}
            <label>State</label>
            {/* Select is a custom component from react-select */}
            <Select
              required={true}
              options={states}
              onChange={(selectedOption) =>
                // setValue is used to set the value of the input
                setValue("state", selectedOption.abbreviation)
              }
            />
            <label>Zip Code</label>
            <input
              type="number"
              {...register("zipCode", {
                required: "The zip code is required and must be a number",
              })}
            />
            {errors.zipCode && (
              <div className="home-message">{errors.zipCode.message}</div>
            )}
          </fieldset>

          <div className="home-informations">
            <label>Department</label>
            {/* Select is a custom component from react-select */}
            <Select
              required={true}
              options={departments}
              onChange={(selectedOption) =>
                // setValue is used to set the value of the input
                setValue("department", selectedOption.value)
              }
            />
          </div>
          <button className="home-save">Save</button>
        </form>
      </div>
      {modal ? (
        <Modal
          closeModal={closeModal}
          firstName={employeesData.firstName}
          lastName={employeesData.lastName}
        />
      ) : null}
    </section>
  );
}
