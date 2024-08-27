import { useState } from 'react';

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
        ? (
          <div className="
          ASSIGN-LOCATION-MODAL
          fixed top-0"
          >
            THE MODAL
          </div>
        )
        : ''}
    </>
  );
};

export default AssignLocation;
