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

```ruby
getCurrentLocation()
```

---

### Get Location Detail

Get `detail` of `location`.

```ruby
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

```ruby
getAddresses(input)
```

---

### Street Address

Create a location value from a specific street address.

```ruby
streetAddress(address1,address2,city,state,country,zip)
```

## Maps

### Open in Maps

Open `location` in the default maps app.

```ruby
openInMaps(location)
```

## Routing

### Get Halfway Point

Get the halfway point between `firstLocation` and `secondLocation`.

```ruby
getHalfwayPoint(firstLocation,secondLocation)
```

## Weather

### Get Current Weather

Get current weather conditions for the users current location.

```ruby
getCurrentWeather()
```

---

### Get Current Weather at Location

Get current weather conditions at `location`.

```ruby
getCurrentWeatherAt(location)
```

---

### Get Weather Detail

Get `detail` of `weather`.

```ruby
getWeatherDetail(weather,detail)
```

#### Weather Details

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

---

### Get Weather Forecast

Get `type` of forecast for the users current location.

```ruby
getWeatherForecast(type)
```

#### Forecast Types

- Daily
- Hourly

---

### Get Weather Forecast at Location

Get `type` of forecast for `location`.

```ruby
getWeatherForecastAt(type,location)
```
