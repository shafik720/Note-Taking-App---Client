import React from 'react';
import './PopupNotepad.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../../Utilities/LocalStorage/getDb';



const PopupNotepad = () => {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        addToDb(data);
    };

    // closing 'Add Note' popup display
    const closePopup = () => {
        document.querySelector('.popup-parent').classList.remove('active');
        // document.querySelector('.error-text').textContent('')
        reset();
    }
    return (
        <div className='popup-parent'>
            <div className="popup-modal">
                <div className="popup-close-button">
                    <span draggable onClick={closePopup}><FontAwesomeIcon icon={faMultiply} />
                    </span>
                </div>
                <div className="reactHookForm">
                    <form className='hookForm mt-5' onSubmit={handleSubmit(onSubmit)}>
                        {/* getting note title value */}
                        <div className="note-title">
                            <p>Note Title : </p>
                            <input defaultValue="" {...register("noteTitle", { maxLength: 15 })} />
                            {/* errors will return when field validation fails  */}
                            {errors?.noteTitle?.type === "maxLength" && (
                                <p className='error-text'>Title Length should not be more than 15 words</p>
                            )}
                            {errors.exampleRequired && <p className='error-text'>Title Length should not be more than 15 words</p>}
                        </div>

                        {/* getting note details value */}
                        <div className="note-details mt-3">
                            <p>Note Details :</p>
                            <textarea rows={4} cols={40} {...register("noteDetails", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <p>This field is required</p>}
                        </div>

                        <input type="submit" className='mt-3 note-submit-button' value="Add Note" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupNotepad;