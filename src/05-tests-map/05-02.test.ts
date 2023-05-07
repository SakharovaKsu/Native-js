import {LocalCityType} from "../02-tests-object/02-02";
import {getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses} from "./05";

let city1: LocalCityType;

beforeEach(() => {
    city1 = {
        title: 'New York',
        houses: [
            {
                buildeAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildeAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildeAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'White street'
                    }
                }
            }
        ],
        governmentBuilding: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('list of streets titles of governments buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city1.governmentBuilding);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})

test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city1.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('White street');
})