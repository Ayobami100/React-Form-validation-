import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "onChange" // "onChange"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleChange = (e) =>{
    console.log(e.target);
  }

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* <div className='formInput'>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="bill"
            {...register("firstName", { required: true, maxLength: 2 })}
          />
          {errors.firstName && <p>This is required</p>}
        </div> */}

        <div className='formInput'>
          <label htmlFor="name">Name:</label>
          <input focused= 'true' onChange ={(e) => handleChange()}
            placeholder="Enter your Fullname"
            {...register("name", { required: true,
            pattern: {
                value: /^[a-zA-Z_]+( [a-zA-Z]+)$/g,
                // value: /^\w+(?=(,?\s))(?:\1\w+)$/g,
             } })}
          />
          {errors.name && <p>It is required & not more than two names</p>}
        </div>

        <div className='formInput'>
          <label htmlFor="email" >
            Email:
          </label>
          <input placeholder="Enter your Email"
           {...register("email", { required: true,
              pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         } })} />
          {errors.email && <p>This is required</p>}
        </div>

        <div className='formInput'>
          <label htmlFor="phone">
            Phone:
          </label>
          <input placeholder="Enter your Phone Number"
          {...register("phone", { required: true, maxLength: 11,
            pattern: {
              value: /^[0-9]*$/g,
              // value: /^\w+(?=(,?\s))(?:\1\w+)$/g,
           } })}/>
          {errors.phone && <p>Phone Number should be 11 digits</p>}
        </div>

        <div className='formInput'>
          <label htmlFor="gender">
            Gender:
          </label>
          <div className='genderInput'>
            <label>
                <input
                  {...register('gender', { required: true })}
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                />{' '}
              Male
            </label>

            <label>
              <input
                {...register('gender', { required: true })}
                type="radio"
                name="gender"
                value="female"
                id="female"
              />{' '}
            Female
          </label>
          </div>
          {errors.gender?.type === 'required' &&
            <p>Tell us what your Gender is</p>}
        </div>

        <div className='formInput'>
          <label htmlFor="high">
            Highest Qualification:
          </label>
          <select name="high"    {...register('high', { required: true })}>
            <option value=""></option>
            <option value="5">School Cert</option>
            <option value="6">Bsc</option>
            <option value="6">Masters</option>
          </select>
          {errors.high?.type === 'required' &&
            <p>This is required</p> }
        </div>

        <div className='formInput'>
          <label htmlFor="skills">
            Skills:
          </label>
          <div className='genderInput'>
            <label>
                <input
                  {...register('skill', { required: true })}
                  type="checkbox"
                  name="skill"
                  value="java"
                />{' '}
              Java
            </label>

            <label>
              <input
                {...register('skill', { required: true })}
                type="checkbox"
                name="skill"
                value="python"
              />{' '}
            Python
          </label>

          <label>
              <input
                {...register('skill', { required: true })}
                type="checkbox"
                name="skill"
                value="react"
              />{' '}
            React
          </label>
          </div>
            {errors.skill?.type === 'required' &&
            <p>Choose atleast two skills</p>}
        </div>

        <div className='formInput'>
          <label htmlFor="comment">Comments:</label>
          <textarea
            placeholder=""
            {...register("comment", { required: true,
            pattern: {
              value:  /^.{20,}$/g,
              // value: /^\w+(?=(,?\s))(?:\1\w+)$/g,
           } })}></textarea>
          {errors.comment && <p>This is required and must be more than 20 characters</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
