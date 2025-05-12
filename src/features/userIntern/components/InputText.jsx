import React from 'react'

function InputText({ icon, label, placeholder, meta, type }) {
  return (
    <div className='' >
      <label for={meta} class="block text-sm font-mw font-normal text-lm-text">{label}</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <img src={icon} alt={meta} />
        </div>
        <input
          type={type}
          id={meta}
          name={meta}
          class="bg-lm-primary border-1 border-abut-text text-abu-text text-sm font-ws rounded-lg focus:ring-dm-primary focus:border-dm-primary focus:text-lm-text block w-full ps-10 p-2.5"
          placeholder={placeholder} />
      </div>
    </div>
  )
}

export default InputText;