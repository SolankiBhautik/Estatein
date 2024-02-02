import React from 'react'
import Heading from '../ui/Heading'
import { Separator } from '../ui/separator'


const Pricebox = ({ label, price, text }) => {
    return (
        <div className='p-4 border-b border-[#262626] rounded-lg'>
            <p className='p pb-3'>{label}</p>
            <div className="flex gap-3 items-center">
                <h2 className="h2">{Number.isInteger(price) ? `$${price}` : price}</h2>
                {text && <div className="box p-2 bg-[#1A1A1A] p">{text}</div>}
            </div>
        </div>
    )
}

const Pricing = ({ price, additional_fees, monthly_costs, total_initial_costs, monthly_expenses }) => {


    return (
        <div className='pt-24'>
            <Heading
                heading="Comprehensive Pricing Details"
                description='At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision'
            />
            <div className=' flex-col flex  md:flex-row gap-2 md:gap-4 px-4 py-3 items-start md:items-center border border-[#262626] rounded-md bg-[#1A1A1A]'>
                <p className='text-lg '>Note</p>
                <p className='p'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </div>
            <div className='flex flex-col pt-10'>
                <p className="p">Listing Price</p>
                <h2 className="h2 pb-4">${price}</h2>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <div className="grid grid-cols-1 gap-2 box md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
                        <h2 className="text-center h2 col-span-full p-4 flex flex-col gap-4">Additional Fees <Separator /></h2>
                        <Pricebox
                            label="Property Transfer Tax"
                            price={additional_fees && additional_fees.property_transfer_tax}
                            text='Base on the sale price and local regulation'
                        />
                        <Pricebox
                            label='Legal Fees'
                            price={additional_fees && additional_fees.legal_fees}
                            text='Approximate cost for legal services, include title transfer'
                        />
                        <Pricebox
                            label='Home Inspection'
                            price={additional_fees && additional_fees.home_inspection}
                            text='Recommended for due diligence'
                        />
                        <Pricebox
                            label='Property Insurance'
                            price={additional_fees && additional_fees.property_insurance}
                            text='Annul const for comprehensive'
                        />
                        <Pricebox
                            label='Mortgage Fees'
                            price={additional_fees && additional_fees.mortgage_fees}
                            text='Annul const for comprehensive'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="grid grid-cols-1 gap-2 box md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
                        <h2 className="text-center h2 col-span-full p-4 flex flex-col gap-4">Monthly Costs <Separator /></h2>
                        <Pricebox
                            label="Property Tax"
                            price={monthly_costs && monthly_costs.property_taxes}
                            text='Base on the sale price and local regulation'
                        />
                        <Pricebox
                            label='Homeowners Association Fees'
                            price={monthly_costs && monthly_costs["homeowners'_association_fee"]}
                            text='Monthly fee for common area maintenance and security'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="grid grid-cols-1 gap-2 box md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
                        <h2 className="text-center h2 col-span-full p-4 flex flex-col gap-4">Monthly Costs <Separator /></h2>
                        <Pricebox
                            label="Listing Price"
                            price={total_initial_costs && total_initial_costs.listing_price}
                            text=''
                        />
                        <Pricebox
                            label='Additional Fees'
                            price={total_initial_costs && total_initial_costs.additional_fees}
                            text='Property transfer tax, legal fees, inspection, insurance'
                        />
                        <Pricebox
                            label='Down Payment'
                            price={total_initial_costs && total_initial_costs.down_payment}
                            text='20%'
                        />
                        <Pricebox
                            label='Mortgage Amount'
                            price={total_initial_costs && total_initial_costs.mortgage_amount}
                            text='if applicable'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="grid grid-cols-1 gap-2 box md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
                        <h2 className="text-center h2 col-span-full p-4 flex flex-col gap-4">Monthly Expenses <Separator /></h2>
                        <Pricebox
                            label="Property Taxes"
                            price={monthly_costs && monthly_costs.property_taxes}
                        />
                        <Pricebox
                            label='Homeowners Association Fees'
                            price={monthly_costs && monthly_costs["homeowners'_association_fee"]}
                        />
                        <Pricebox
                            label='Mortgage Payment'
                            price={monthly_expenses && monthly_expenses.mortgage_payment}
                            text=''
                        />
                        <Pricebox
                            label='Property Insurance'
                            price={additional_fees && monthly_expenses.property_insurance}
                            text='Approximate monthly cost'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing