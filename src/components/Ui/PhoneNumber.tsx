/* eslint-disable @typescript-eslint/no-explicit-any */
import PhoneInputImport from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput = (PhoneInputImport as any).default || PhoneInputImport;

interface IProps {
  phone: string;
  setPhone: (phone: string) => void;
}

const PhoneNumber = (props: IProps) => {
  const { phone, setPhone } = props;
  return (
    <div className="w-full">
      <PhoneInput
        inputStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "0.375rem",
          borderColor: "#d1d5dc",
        }}
        country="eg"
        value={phone}
        onChange={(value: any) => setPhone(value)}
      />
    </div>
  );
};

export default PhoneNumber;
