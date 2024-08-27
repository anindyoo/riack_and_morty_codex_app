import { useState } from 'react';
import useLocationStore from '../../store/locationStore';

const AssignModal = (props) => {
  const { setModal, characterId } = props;
  const [input, setInput] = useState('');

  const { addLocation } = useLocationStore();

  const handleCancelClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleInputOnchange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    addLocation(({
      location: input,
      characterId,
    }));
    setModal(false);
  };

  return (
    <>
      <div className="
      MODAL-OVERLAY
      UNIVERSAL-CONTAINER
      fixed top-0
      h-screen
      -ml-4
      bg-zinc-900 opacity-35"
      />
      <div className="
      WRAPPER
      UNIVERSAL-CONTAINER
      flex justify-center"
      >
        <div className="
        ASSIGN-LOCATION-MODAL
        fixed top-40
        flex flex-col justify-between
        w-96 h-[12rem]
        px-4 py-6
        border border-slimyGreen
        rounded-lg
        bg-white"
        >
          <div className="
          MODAL-TITLE-INPUT-WRAPPER
          flex flex-col gap-5"
          >
            <div className="
            MODAL-TITLE
            text-lg text-center font-medium text-zinc-900"
            >
              Assign Character Location
            </div>
            <div>
              <input
                type="text"
                id="location"
                onChange={handleInputOnchange}
                className="
                LOCATION-INPUT
                w-full h-8
                px-2 py-4
                border border-slimyGreen
                rounded-sm"
                placeholder="Input the character's location here"
                required
              />
            </div>
          </div>
          <div className="
          MODAL-BUTTON-CONTAINER
          flex flex-row justify-end gap-3"
          >
            <button
              type="button"
              onClick={handleCancelClick}
              className="
              CANCEL-BUTTON
              h-8
              px-4
              font-medium"
            >
              CANCEL
            </button>
            <button
              type="button"
              onClick={handleSubmitClick}
              className="
              SUBMIT-BUTTON
              h-8
              px-4
              font-medium
              rounded-sm
              bg-slimyGreen"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignModal;
