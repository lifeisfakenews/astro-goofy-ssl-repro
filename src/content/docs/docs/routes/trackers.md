---
title: Trackers
description: Breakdown of the API routes available for Trackers
---

## List Trackers

**GET** `/trackers/{app_id}`

**Authed Scopes:** `trackers.read`

List all trackers for the given `app_id`. Will only return trackers that the Integration has been linked with, unless it has the `trackers.read` scope globally

Returns an array of [`Tracker`](/docs/reference/tracker.md) objects

## Get Tracker

**GET** `/trackers/{app_id}/{platform}`

**Authed Scopes:** `trackers.read`

Fetch a tracker for the `{app_id}` on the given `{platform}`

Returns a [`Tracker`](/docs/reference/tracker.md) object

## Create Tracker

**PUT** `/trackers/{app_id}/{platform}`

**Global Scopes:** `trackers.ceate`

Creates a tracker for the given `{app_id}` on the given `{platform}`

A status `409` will be returned if the tracker already exists

Returns a [`Tracker`](/docs/reference/tracker.md) object with 2 additonal fields:
- `authorization` - The authorization token that the user needs to enter in the botlist config
- `webhook_url` - The webhook URL that the user needs to enter in the botlist config

This setup step on the botlist's site must either be done automatically, or the user should be given clear steps to do so. The 2 additional fields must both be shown to the user after creation to allow for this process

### Body Params

| Property | Type | Description |
|-- |-- |-- |
| `type` | [AppType](/reference/#apptype) | App type |
| `guild`* | Snowflake | ID of the server the tracker is setup in. |
| `channel` | Snowflake | ID of the channel vote messages are sent to |
| `content` | ?string | Vote message content |
| `ping` | boolean | Should the voter be pinged? Default: `false` |
| `invisible_pings` | boolean | Should the pings in the vote message be hidden? Default: `false` |
| `embed`** | [DiscordEmbed](https://discord.com/developers/docs/resources/channel#embed-object) | Vote message embed fields & content |
| `role` | ?Snowflake | ID of the primary vote role |
| `role_duration` | ?number | Duration, in `ms`, that primary reward role is kept for |

\* Not required for `guild` trackers. If provided, it must match the `app_id` parameter in the URL, otherwise a code `14` error will be returned
\*\* The `description` and `color` fields are required. All other embed fields are optional

## Edit Tracker

**PATCH** `/trackers/{app_id}/{platform}`

**Authed Scopes:** `trackers.write`

Update the tracker with the id of `{app_id}` on the given `{platform}`

Returns a [`Tracker`](/docs/reference/tracker.md) object

### Body Params

All parameters are optional. Only parameters provided will be updated

| Property | Type | Description |
|-- |-- |-- |
| `channel` | ?Snowflake | ID of the channel vote messages are sent to |
| `content` | ?string | Vote message content |
| `ping` | ?boolean | Should the voter be pinged |
| `invisible_pings` | ?boolean | Should the pings in the vote message be hidden |
| `embed`* | ?[DiscordEmbed](https://discord.com/developers/docs/resources/channel#embed-object) | Vote message embed fields & content |
| `role` | ?Snowflake | ID of the primary vote role |
| `role_duration` | ?number | Duration, in `ms`, that primary reward role is kept for |
| `leaderboard` | ?[TrackerLeaderboard](/reference/tracker#trackerleaderboard) | Configuration for the web & Discord leaderboard |

\* The `description` and `color` fields are required. All other embed fields are optional

## Delete Tracker

**DELETE** `/trackers/{app_id}/{platform}`

**Authed Scopes:** `trackers.delete`

Deletes a tracker

Returns a [`Tracker`](/docs/reference/tracker) object

## List Buckets

**GET** `/trackers/{app_id}/{platform}/buckets`

**Authed Scopes:** `trackers.read`

Fetch all vote buckets for a given tracker

Returns a list of [`TrackerBucket`](/docs/reference/tracker#trackerbucket) objects


## Create Bucket

**PUT** `/trackers/{app_id}/{platform}/buckets`

**Authed Scopes:** `trackers.write`

Creates a new vote bucket

Returns a [`TrackerBucket`](/docs/reference/tracker#trackerbucket) object

### Body Params

| Property | Type | Description |
|-- |-- |-- |
| `name` | string | The name of the vote bucket. Displayed in leaderboards & on the dashboard |
| `multiplier` | ?number | What votes should be multiplied by when added to this bucket (default 1) |
| `reset_data` | ?[TrackerBucketReset](/reference/tracker#trackerbucketreset) | Defines how often the vote bucket should be emptied |

## Update Bucket

**PATCH** `/trackers/{app_id}/{platform}/buckets/{bucket_id}`

**Authed Scopes:** `trackers.write`

Update a vote bucket

Returns a [`TrackerBucket`](/docs/reference/tracker#trackerbucket) object

### Body Params

All parameters are optional. Only parameters provided will be updated

| Property | Type | Description |
|-- |-- |-- |
| `name` | ?string | The name of the vote bucket. Displayed in leaderboards & on the dashboard |
| `multiplier` | ?number | What votes should be multiplied by when added to this bucket |
| `reset_data` | ?[TrackerBucketReset](/reference/tracker#trackerbucketreset) | Defines how often the vote bucket should be emptied |

## Delete Bucket

**DELETE** `/trackers/{app_id}/{platform}/buckets/{bucket_id}`

**Authed Scopes:** `trackers.write`

Delete a vote bucket. This will also delete all votes in that vote bucket

Returns a [`TrackerBucket`](/docs/reference/tracker#trackerbucket) object

## Empty Bucket

**PATCH** `/trackers/{app_id}/{platform}/buckets/{bucket_id}/empty`

**Authed Scopes:** `trackers.write`, `votes.write`

Deletes all votes in a vote bucket

Returns a [`TrackerBucket`](/docs/reference/tracker#trackerbucket) object

