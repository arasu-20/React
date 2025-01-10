import { useForm } from "react-hook-form";

export default function ReactFormHook(){
    const {register, handleSubmit, formState : { errors }} = useForm();

    function onSubmitForm(formData){
        console.log(formData);
    }
    return (
        <div>
            <h2>React Form</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input {...register('email',{required: 'Email is Required'})} type="email" name="email" />{
                        errors.email && <p style={{color:'red'}}>{errors.email.message}</p>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input {...register('password', {required:true, minLength:{value:8, message:'Password must be at least 8 character'}})} type="password" name="password" id="" />
                    {
                        errors.password && <p style={{color:'red'}}>{errors.password.message}</p>
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
