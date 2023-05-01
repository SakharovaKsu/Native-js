
export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type TitleType = {
    title: string
}

export type StrType = {
    street: TitleType
}

export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: StrType
}

export type HousesType = {
    buildeAt: number
    repaired: boolean
    address: AddressType
}

export type LocalCityType = {
    title: string
    houses: Array<HousesType>
    governmentBuilding: Array<GovernmentBuildingType>
    citizensNumber: number
}