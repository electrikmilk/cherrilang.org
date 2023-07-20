---
title: Location
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 4
---

# Location Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Get Current Location

Get the users current location.

```
 getCurrentLocation()
 ```

---

### Get Location Detail

Get `detail` of `location`.

```
getLocationDetail(location,detail)
```

#### Location Details

- Name
- URL
- Label
- Phone Number
- Region
- ZIP Code
- State
- City
- Street
- Altitude
- Longitude
- Latitude

## Addresses

### Get Addresses

Get addresses from `input`.

```
getAddresses(input)
```

---

### Street Address

Create a location value from a specific street address.

```
streetAddress(address1,address2,city,state,country,zip)
```

## Maps

### Open in Maps

Open `location` in the default maps app.

```
openInMaps(location)
```

## Routing

### Get Halfway Point

Get the halfway point between `firstLocation` and `secondLocation`.

```
getHalfwayPoint(firstLocation,secondLocation)
```

## Weather

### Get Current Weather

Get current weather conditions, optionally at a specific location.

```
getCurrentWeather(location="Current Location")
```

---

### Get Weather Forecast

Get the weather forecast of `type`, optionally for a `location`.

```
getWeatherForecast(type="Daily",location="Current Location")
```

#### Forecast Types

- Daily
- Hourly

---

### Get Weather Detail

Get `detail` of `weather`.

```
getWeatherDetail(weather,detail)
```

#### Weather details

- Name
- Air Pollutants
- Air Quality Category
- Air Quality Index
- Sunset Time
- Sunrise Time
- UV Index
- Wind Direction
- Wind Speed
- Precipitation Chance
- Precipitation Amount
- Pressure
- Humidity
- Dewpoint
- Visibility
- Condition
- Feels Like
- Low
- High
- Temperature
- Location
- Date
