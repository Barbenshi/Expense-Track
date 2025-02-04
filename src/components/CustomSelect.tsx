import { useState, useRef, useEffect } from "react";
import "../assets/styles/setup/CustomSelect.css"; // Import the CSS file

interface CustomSelectProps {
  options: { [key: string]: string }; // Object with key-value pairs
  value: string | null; // Controlled value
  onSelect: (value: string) => void; // Callback function when value changes
}

export const CustomSelect = ({ options, onSelect, value }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={isOpen ? 'custom-select open' : 'custom-select'} ref={dropdownRef}>
      <button className="select-button" onClick={() => setIsOpen(!isOpen)}>
        {value ? options[value] : "Select an option"}
      </button>

      {isOpen && (
        <ul className="select-dropdown">
          {Object.entries(options).map(([value, name], index) => (
            <li
              key={index}
              className="select-option"
              onClick={() => {
                onSelect(value);
                setIsOpen(false);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};