import React from 'react';
import './PopupNotepad.css';
import { useForm } from "react-hook-form";

const PopupNotepad = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className='popup-parent'>
            <div className="popup-modal">
                <div className="reactHookForm">

                    <form className='hookForm mt-5' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className="note-title">
                            <p>Note Title : </p>
                            <input defaultValue="" {...register("noteTitle")} />
                        </div>


                        {/* include validation with required or other standard HTML validation rules */}
                        <div className="note-details mt-3">
                            <p>Note Details :</p>
                            <textarea rows={4} cols={40} {...register("noteDetails", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <p>This field is required</p>}
                        </div>

                        <input type="submit" className='mt-3 note-submit-button' />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default PopupNotepad;