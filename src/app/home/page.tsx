'use client'

import React from 'react';
import * as Form from "@radix-ui/react-form";
import * as Select from '@radix-ui/react-select';
import DisplayImage from '@/components/misc/display-image';
import TertiaryButton from '@/components/buttons/tertiary-button';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

const PayrollPage = () => {
  return (
    <main className="grid grid-rows-9 w-screen h-screen bg-slate-50">
      {/* Header */}
      <div className='row-span-1 px-24 flex justify-between items-center'>
        <DisplayImage type='logo' className='w-64 h-auto' />
        <TertiaryButton label='Sair'>
          <XMarkIcon className='w-6' />
        </TertiaryButton>
      </div>
      {/* Title */}
      <div className='row-span-1 flex justify-center items-center'>
        <h1 className='text-5xl font-bold text-slate-600'>Geração de folha de pagamento</h1>
      </div>
      {/* Content */}
      <div className='row-span-6 px-[30%]'>
        <Form.Root className='flex flex-col gap-6'>
          {/* Employee */}
          <Form.Field name='employee'>
            <div className=''>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Funcionário</h1>
              <Form.Control asChild>
                <Select.Root required>
                  <Select.Trigger className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                                          bg-slate-100  ring-slate-500 text-slate-500 focus:ring-blue-500'>
                    <Select.Value placeholder='Selecione um funcionário...' className='select-none' />
                    <Select.Icon className='text-slate-500'>
                      <ChevronDownIcon className='w-5' />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Content className='overflow-hidden rounded-lg bg-slate-100'>
                    <Select.Viewport className=''>
                      <Select.Group className='font-medium text-slate-500'>
                        <Select.Label> Funcionários disponíveis </Select.Label>
                      </Select.Group>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Root>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Adiantamento */}
          <Form.Field name='advance_money'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Adiantamento</h1>
              <Form.Control asChild>
                <input type='number' min={0} placeholder='Digite o valor do adiantameno...'
                  className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                          bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Comissão */}
          <Form.Field name='comission'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Comissão</h1>
              <Form.Control asChild>
                <input type='number' min={0} placeholder='Digite o valor da comissão...'
                  className='flex w-full px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                          bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
              </Form.Control>
            </div>
          </Form.Field>

          {/* Hora extra */}
          <Form.Field name='extra_hour'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Hora Extra</h1>
              <div className='flex w-full items-center'>
                <Form.Control asChild>
                  <input type='number' min={0} placeholder='Digite o valor por hora... Ex: 200'
                    className='flex w-[80%] px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
                </Form.Control>
                <div className='flex w-[20%] justify-center'>
                  <p className='text-xl font-medium text-slate-500'>por hora</p>
                </div>
              </div>
            </div>
          </Form.Field>

          {/* Faltas/Atrasos */}
          <Form.Field name='arrears'>
            <div>
              <h1 className='mb-2 text-2xl font-semibold leading-none text-slate-600'>Faltas ou atrasos</h1>
              <div className='flex w-full items-center'>
                <Form.Control asChild>
                  <input type='number' min={0} placeholder='Digite o valor em horas de atraso...'
                    className='flex w-[80%] px-6 py-4 justify-between items-center rounded-lg ring-2 text-base leading-none outline-none select-none transition-all ease-in-out duration-700
                bg-slate-100  ring-slate-500 text-slate-500 placeholder:text-slate-500 focus:ring-blue-500'/>
                </Form.Control>
                <div className='flex w-[20%] justify-center'>
                  <p className='text-xl font-medium leading-none text-slate-500'>hora(s)</p>
                </div>
              </div>
            </div>
          </Form.Field>
          <h1 className='mt-2 text-2xl font-semibold leading-none text-slate-600'>Outros</h1>
        </Form.Root>
      </div>
      {/* Footer */}
      <div className='row-span-1'>

      </div>
    </main>
  )
}

export default PayrollPage