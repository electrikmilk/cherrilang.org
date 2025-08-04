---
title: Location
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 9
---

# Location Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note-title }
> Required Include
> 
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/location'
> ```

### Get Current Location

Get current user location.

```
getCurrentLocation()
```

---

### Get Location Detail

Get a detail about a location.

```
enum locationDetail {
    'Name',
    'URL',
    'Label',
    'Phone Number',
    'Region',
    'ZIP Code',
    'State',
    'City',
    'Street',
    'Altitude',
    'Longitude',
    'Latitude',
}

getLocationDetail(variable location, locationDetail detail)
```

## Addresses

### Get Addresses

Get addresses from `input`.

```
getAddresses(variable input)
```

---

### Street Address

Create a location value with an address.

```
streetAddress(text addressLine2, text addressLine2, text city, text state, text country, number zipCode)
```

## Maps

### Get Halfway Point

Get the halfway point between two locations.

```
getHalfwayPoint(variable firstLocation, variable secondLocation)
```

---

### Get Maps Link

Get a link for a location.

```
getMapsLink(variable location)
```

---

### Open in Maps

Open a location in maps.

```
openInMaps(variable location)
```

## Weather

### Get Current Weather

Get the current weather for a location.

```
getCurrentWeather(text ?location = "Current Location")
```

---

### Get Weather Detail

Get a detail about a weather forecast.

```
enum weatherDetail {
    'Name',
    'Air Pollutants',
    'Air Quality Category',
    'Air Quality Index',
    'Sunset Time',
    'Sunrise Time',
    'UV Index',
    'Wind Direction',
    'Wind Speed',
    'Precipitation Chance',
    'Precipitation Amount',
    'Pressure',
    'Humidity',
    'Dewpoint',
    'Visibility',
    'Condition',
    'Feels Like',
    'Low',
    'High',
    'Temperature',
    'Location',
    'Date',
}

getWeatherDetail(variable weather, weatherDetail detail)
```

---

### Get Weather Forecast

Get various types of weather forecast for a location.

```
enum weatherForecastTypes {
    'Daily',
    'Hourly',
}

getWeatherForecast(weatherForecastTypes ?type = "Daily", text ?location = "Current Location")
```
