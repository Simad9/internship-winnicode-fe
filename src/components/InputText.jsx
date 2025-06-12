import React from 'react'

function InputText({ icon, label, placeholder, meta, type, value, onChange }) {
  return (
    <div className='w-full' >
      <label for={meta} class="block text-base md:text-[18px] font-mw font-normal text-lm-text">{label}</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <img src={icon} alt={meta} />
        </div>
        <input
          type={type}
          id={meta}
          name={meta}
          class="bg-lm-primary border-1 border-abu-text text-lm-text text-base md:text-[18ox] font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
          value={value}
          placeholder={placeholder}
          onChange={onChange} />
      </div>
    </div>
  )
}

export default InputText;
