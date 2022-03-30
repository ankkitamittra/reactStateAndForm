import React from "react";
import { useForm } from "react-hook-form";

const TextInput = React.forwardRef((props, ref) => <input ref={ref} {...props}/>)

export default function App({ageValidator}) {
  const { register, handleSubmit, watch, formState: 
    { errors , isValid, isDirty, isSubmitSuccessful, isSubmitted, isSubmitting, isValidating, value, touchedFields, dirtyFields} , setValue} = useForm(
        { defaultValues: { name: "ankita", age: "20"},  mode: 'all',});
  const onSubmit = data => console.log(data);

  console.log(`dirtyFields`, dirtyFields)
  console.log(`touchedFields`, touchedFields)
  console.log(`isValidating`, isValidating)
  console.log(`isValid`, isValid)
  console.log(`isDirty`, isDirty)
  console.log(`isSubmitted`, isSubmitted)
  console.log(`val`, value)

  const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  const watchAllFields = watch();

  console.log(`watchShowAge`, watchShowAge)
  console.log(`watchAllFields`, watchAllFields)

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);


  return (

    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <TextInput defaultValue="test" {...register("name", { required: true , validate: (val) => val.length > 5})} />
      {errors.name && <span>name error</span>}

      <input type="checkbox" {...register("showAge")} />
      <input defaultValue="test" {...register("age", { required: true , validate: (val) => val.length > ageValidator})} />
      {errors.age && <span>Age erro</span>}
      
     
      
      <button type="submit" onClick={handleSubmit(onSubmit)} value={"Submit"}>Submit</button>
    </div>
  );
}