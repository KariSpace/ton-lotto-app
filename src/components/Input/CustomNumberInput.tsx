import  { FC, useState, useRef } from 'react';
import './Input.css';


const CustomNumberInput: FC = () => {
    const [values, setValues] = useState(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  
    const handleChange = (index: number, value: string) => {
      if (value.length > 2) return;
  
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);
  
      if (value.length === 2 && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    };
  
    return (
      <div className="row number-selector" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={(el) => (inputsRef.current[index] = el)}
            maxLength={2}
            className="input-numbers"
            style={{ width: '50px', height: "50px",textAlign: 'center' }}
          />
        ))}
      </div>
    );
  };

export default CustomNumberInput;