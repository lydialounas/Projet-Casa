import { useState } from "react";
import "./Collapse.css"; // pense à styliser .arrow.up / .arrow.down

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="collapse">
      <div
        className="collapse-title"
        data-testid="collapse-title"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
      >
        <span>{title}</span>
        <span className={`arrow ${open ? "up" : "down"}`}>⌃</span>
      </div>

      {open && (
        <div className="collapse-content">
          {Array.isArray(content)
            ? content.map((item, index) => (
                <p key={index} className="collapse-text">
                  {item}
                </p>
              ))
            : typeof content === "string" ? (
                <p className="collapse-text">{content}</p>
              ) : null}

        </div>
      )}    

    </div>
    );
}
