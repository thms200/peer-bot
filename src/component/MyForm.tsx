import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { nickname: string; email: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({ nickname: '', email: '' });
  const { nickname, email } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nickname</label>
        <input
          name="nickname"
          placeholder="Write Your Nickname."
          onChange={onChange}
          value={nickname}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          placeholder="Write Your Email."
          onChange={onChange}
          value={email}
        />
      </div>
      <button type="submit">Check</button>
    </form>
  );
}

export default MyForm;
