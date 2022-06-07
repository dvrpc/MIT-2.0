import React from "react";

const Accordion = ({ label, children }) => {
  const openAccordion = event => {
    event.target.classList.toggle("active");
    event.target.classList.toggle("rounded-t");
    event.target.classList.toggle("rounded");
    const panel = event.target.nextSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="w-3/4 my-4">
      <button
        className="accordion bg-[#edf6f6] rounded"
        onClick={openAccordion}
      >
        {label}
      </button>
      <div className="panel flex flex-col rounded-b">{children}</div>
    </div>
  );
};

export default Accordion;
