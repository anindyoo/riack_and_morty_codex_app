import { useState } from 'react';

const AssignLocationModal = (props) => {
  const { setModal } = props;
  const handleCancelClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <>
      <div className="
      MODAL-OVERLAY
      UNIVERSAL-CONTAINER
      fixed top-0
      h-screen
      bg-zinc-900 opacity-35"
      />
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
    </>
  );
};

const AssignLocation = () => {
  const [modal, setModal] = useState(false);

  const handleAssignClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleAssignClick}
        className="
        ASSIGN-LOCATION-BUTTON
        w-full
        text-lg font-bold tracking-wider
        border
        rounded-md
        bg-slimyGreen"
      >
        Assign Location
      </button>
      {modal
        ? <AssignLocationModal setModal={setModal} />
        : ''}
    </>
  );
};

export default AssignLocation;
