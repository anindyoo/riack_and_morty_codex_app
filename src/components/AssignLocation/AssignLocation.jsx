import { useState } from 'react';
import AssignModal from '../AssignModal/AssignModal';

const AssignLocation = (props) => {
  const { characterId, disabled } = props;
  const [modal, setModal] = useState(false);

  const handleAssignClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <div className="
      ASSIGN-BUTTON-CONTAINER
      UNIVERSAL-CONTAINER
      flex flex-row
      fixed bottom-0
      h-20
      -ml-4
      px-4 py-3
      border
      bg-white"
      >
        <button
          disabled={disabled}
          type="button"
          onClick={handleAssignClick}
          className={`
          ASSIGN-LOCATION-BUTTON
          w-full
          text-lg font-bold tracking-wider
          border
          rounded-md
          ${disabled ? 'bg-lime-200' : 'bg-slimyGreen'}`}
        >
          {disabled ? 'Location is Assigned' : 'Assign Location'}
        </button>
      </div>
      {modal
        ? <AssignModal setModal={setModal} characterId={characterId} />
        : ''}
    </>
  );
};

export default AssignLocation;
