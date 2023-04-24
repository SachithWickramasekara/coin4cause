import React, { useState } from "react";
interface Props {}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const ContactUs = (props: Props) => {
  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: FormErrors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "Please enter your first name";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Please enter your last name";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message";
    }

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    // TODO: Handle form submission
    console.log(formData);

    // Clear form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setFormErrors({});
  };
  return (
    <div>
      <div className="container mx-auto text-center sm:p-20 p-8 flex flex-col gap-8">
        <div className="text-5xl font-bold">Contact Us</div>
        <div className="lg:px-44">
          Questions, bug reports, feedback, feature requests - we are here for
          it all Already use Coin4Cause? Sing in so we can tailor your support
          experience. If that’s not possible, we’d still like to here from you.
        </div>
        <div>
          <div className="bg-[#EFF4F8] flex flex-col items-start lg:p-20 md:w-full  gap-4 rounded-lg p-8 lg:w-3/5 lg:mx-auto">
            <div className="flex flex-col w-full ">
              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row lg:gap-8  gap-2 justify-center items-center pt-2 lg:py-4">
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] placeholder:text-[#08415C] bg-transparent"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && (
                      <div className="text-red-500 text-left">
                        {formErrors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-col">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && (
                      <div className="text-red-500 text-left">
                        {formErrors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:py-4 pt-2 pb-4 flex justify-center items-center">
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[55px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="message"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <div className="text-red-500 text-left">
                        {formErrors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className=" lg:py-4 pt-2 pb-4 flex justify-center items-center">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Message"
                      className="w-full h-[96px] rounded-lg px-4 border border-[#08415C] bg-transparent placeholder:text-[#08415C]"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {formErrors.message && (
                      <div className="text-red-500 text-left">
                        {formErrors.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mx-auto justify-center lg:items-start   items-center">
                  <button className="bg-[#08415C] w-3/5 h-[50px] rounded-lg text-white font-semibold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
