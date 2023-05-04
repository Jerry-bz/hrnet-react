import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "modal-validation-react";
import { getEmployee } from "../features/employee.slice";
import { states } from "../utils/states.select";
import { departments } from "../utils/departments.select";
import "../styles/form.css";

/**
 * Employee form
 * @returns {JSX.Element}
 */

export const EmployeeForm = () => {
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

  // Modal to display the employee created
  const [modal, setModal] = useState(false);

  // Get the data of the employee created
  const [employeesData, setEmployeesData] = useState({});

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
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
        <div className="form-informations">
          <label>First Name</label>
          <input
            data-testid="firstName"
            type="text"
            {...register("firstName", {
              required: "Firstname is required",
              minLength: { value: 3, message: "The firstname is too short" },
            })}
          />
          {errors.firstName && (
            <div className="form-message">{errors.firstName.message}</div>
          )}
        </div>
        <div className="form-informations">
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Lastname is required",
              minLength: { value: 3, message: "The lastname is too short" },
            })}
          />
          {errors.lastName && (
            <div className="form-message">{errors.lastName.message}</div>
          )}
        </div>
        <div className="form-informations">
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
        <div className="form-informations">
          <label>Start Date</label>
          <DatePicker
            required={true}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValue("startDate", date.toLocaleDateString());
            }}
          />
        </div>
        <fieldset className="form-address">
          <legend>Address</legend>
          <div className="form-informations">
            <label>Street</label>
            <input
              type="text"
              {...register("street", {
                required: "The street is required",
                minLength: { value: 3, message: "The street is too short" },
              })}
            />
            {errors.street && (
              <div className="form-message">{errors.street.message}</div>
            )}
          </div>
          <div className="form-informations">
            <label>City</label>
            <input
              type="text"
              {...register("city", {
                required: "City is required",
                minLength: { value: 3, message: "The city is too short" },
              })}
            />
            {errors.city && (
              <div className="form-message">{errors.city.message}</div>
            )}
          </div>
          <div className="form-informations">
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
          </div>
          <div className="form-informations">
            <label>Zip Code</label>
            <input
              type="number"
              {...register("zipCode", {
                required: "Zip code is required",
              })}
            />
            {errors.zipCode && (
              <div className="form-message">{errors.zipCode.message}</div>
            )}
          </div>
        </fieldset>

        <div className="form-informations">
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
        <button className="form-save">Save</button>
      </form>
      {modal ? <Modal closeModal={closeModal} /> : null}
    </>
  );
};
