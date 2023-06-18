export interface Location extends CityOptionType{
    Commune: string
    District: string
    Id: string
    Latitude: number
    Longitude: number
    Name: string
    Province: string
    Type: 'village' | 'city'
}

export interface CityOptionType {
    value: string
    label: string
    subLabel: string
    latitude: number
    longitude: number
}
