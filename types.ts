/**
 * https://discord.com/developers/docs/resources/user#user-object
 */
export interface DiscordUser {
	/**
	 * The user's id
	 */
	id: string;
	/**
	 * The user's username, not unique across the platform
	 */
	username: string;
	/**
	 * The user's Discord-tag
	 */
	discriminator: string;
	/**
	 * The user's display name, if it is set. For bots, this is the application name
	 */
	global_name: string | null;
	/**
	 * The user's avatar hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	avatar: string | null;
	/**
	 * Whether the user belongs to an OAuth2 application
	 */
	bot?: boolean;
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system)
	 */
	system?: boolean;
	/**
	 * Whether the user has two factor enabled on their account
	 */
	mfa_enabled?: boolean;
	/**
	 * The user's banner hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	banner?: string | null;
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code
	 */
	accent_color?: number | null;
	/**
	 * The user's chosen language option
	 */
	locale?: string;
	/**
	 * Whether the email on this account has been verified
	 */
	verified?: boolean;
	/**
	 * The user's email
	 */
	email?: string | null;
	/**
	 * The flags on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-user-flags
	 */
	flags?: DiscordUserFlags;
	/**
	 * The type of Nitro subscription on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-premium-types
	 */
	premium_type?: DiscordUserPremiumType;
	/**
	 * The public flags on a user's account
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object-user-flags
	 */
	public_flags?: DiscordUserFlags;
	/**
	 * The user's avatar decoration hash
	 *
	 * See https://discord.com/developers/docs/reference#image-formatting
	 */
	avatar_decoration?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum DiscordUserFlags {
	/**
	 * Discord Employee
	 */
	Staff = 1 << 0,
	/**
	 * Partnered Server Owner
	 */
	Partner = 1 << 1,
	/**
	 * HypeSquad Events Member
	 */
	Hypesquad = 1 << 2,
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 1 << 3,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	MFASMS = 1 << 4,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	PremiumPromoDismissed = 1 << 5,
	/**
	 * House Bravery Member
	 */
	HypeSquadOnlineHouse1 = 1 << 6,
	/**
	 * House Brilliance Member
	 */
	HypeSquadOnlineHouse2 = 1 << 7,
	/**
	 * House Balance Member
	 */
	HypeSquadOnlineHouse3 = 1 << 8,
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 1 << 9,
	/**
	 * User is a [team](https://discord.com/developers/docs/topics/teams)
	 */
	TeamPseudoUser = 1 << 10,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	HasUnreadUrgentMessages = 1 << 13,
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 1 << 14,
	/**
	 * Verified Bot
	 */
	VerifiedBot = 1 << 16,
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 1 << 17,
	/**
	 * Moderator Programs Alumni
	 */
	CertifiedModerator = 1 << 18,
	/**
	 * Bot uses only [HTTP interactions](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction) and is shown in the online member list
	 */
	BotHTTPInteractions = 1 << 19,
	/**
	 * User has been identified as spammer
	 *
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	Spammer = 1 << 20,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 */
	DisablePremium = 1 << 21,
	/**
	 * User is an [Active Developer](https://support-dev.discord.com/hc/articles/10113997751447)
	 */
	ActiveDeveloper = 1 << 22,
	/**
	 * User's account has been [quarantined](https://support.discord.com/hc/articles/6461420677527) based on recent activity
	 *
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 44, but bit shifting above 1 << 30 requires bigints
	 */
	Quarantined = 17_592_186_044_416,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 50, but bit shifting above 1 << 30 requires bigints
	 */
	Collaborator = 1_125_899_906_842_624,
	/**
	 * @unstable This user flag is currently not documented by Discord but has a known value which we will try to keep up to date.
	 * @privateRemarks
	 *
	 * This value would be 1 << 51, but bit shifting above 1 << 30 requires bigints
	 */
	RestrictedCollaborator = 2_251_799_813_685_248,
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum DiscordUserPremiumType {
	None,
	NitroClassic,
	Nitro,
	NitroBasic,
}


export type DashboardWindow = Window & typeof globalThis & {
    roles: GuildRole[];
    buckets: {
        [id: string]: TrackerBucket[];
    }
}

export enum Language {
    "qq" = "qq",
    // "ab" = "ab",
    // "aa" = "aa",
    // "af" = "af",
    // "ak" = "ak",
    // "sq" = "sq",
    // "am" = "am",
    // "ar" = "ar",
    // "an" = "an",
    // "hy" = "hy",
    // "as" = "as",
    // "av" = "av",
    // "ae" = "ae",
    // "ay" = "ay",
    // "az" = "az",
    // "bm" = "bm",
    // "ba" = "ba",
    // "eu" = "eu",
    // "be" = "be",
    // "bn" = "bn",
    // "bh" = "bh",
    // "bi" = "bi",
    // "bs" = "bs",
    // "br" = "br",
    // "bg" = "bg",
    // "my" = "my",
    // "ca" = "ca",
    // "ch" = "ch",
    // "ce" = "ce",
    // "ny" = "ny",
    // "zh" = "zh",
    // "cv" = "cv",
    // "kw" = "kw",
    // "co" = "co",
    // "cr" = "cr",
    // "hr" = "hr",
    // "cs" = "cs",
    // "da" = "da",
    // "dv" = "dv",
    // "nl" = "nl",
    "en" = "en",
    // "eo" = "eo",
    // "et" = "et",
    // "ee" = "ee",
    // "fo" = "fo",
    // "fj" = "fj",
    // "fi" = "fi",
    // "fr" = "fr",
    // "ff" = "ff",
    // "gl" = "gl",
    // "ka" = "ka",
    // "de" = "de",
    // "el" = "el",
    // "gn" = "gn",
    // "gu" = "gu",
    // "ht" = "ht",
    // "ha" = "ha",
    // "he" = "he",
    // "hz" = "hz",
    // "hi" = "hi",
    // "ho" = "ho",
    // "hu" = "hu",
    // "ia" = "ia",
    // "id" = "id",
    // "ie" = "ie",
    // "ga" = "ga",
    // "ig" = "ig",
    // "ik" = "ik",
    // "io" = "io",
    // "is" = "is",
    // "it" = "it",
    // "iu" = "iu",
    // "ja" = "ja",
    // "jv" = "jv",
    // "kl" = "kl",
    // "kn" = "kn",
    // "kr" = "kr",
    // "ks" = "ks",
    // "kk" = "kk",
    // "km" = "km",
    // "ki" = "ki",
    // "rw" = "rw",
    // "ky" = "ky",
    // "kv" = "kv",
    // "kg" = "kg",
    // "ko" = "ko",
    // "ku" = "ku",
    // "kj" = "kj",
    // "la" = "la",
    // "lb" = "lb",
    // "lg" = "lg",
    // "li" = "li",
    // "ln" = "ln",
    // "lo" = "lo",
    // "lt" = "lt",
    // "lu" = "lu",
    // "lv" = "lv",
    // "gv" = "gv",
    // "mk" = "mk",
    // "mg" = "mg",
    // "ms" = "ms",
    // "ml" = "ml",
    // "mt" = "mt",
    // "mi" = "mi",
    // "mr" = "mr",
    // "mh" = "mh",
    // "mn" = "mn",
    // "na" = "na",
    // "nv" = "nv",
    // "nb" = "nb",
    // "nd" = "nd",
    // "ne" = "ne",
    // "ng" = "ng",
    // "nn" = "nn",
    // "no" = "no",
    // "ii" = "ii",
    // "nr" = "nr",
    // "oc" = "oc",
    // "oj" = "oj",
    // "cu" = "cu",
    // "om" = "om",
    // "or" = "or",
    // "os" = "os",
    // "pa" = "pa",
    // "pi" = "pi",
    // "fa" = "fa",
    // "pl" = "pl",
    // "ps" = "ps",
    // "pt" = "pt",
    // "qu" = "qu",
    // "rm" = "rm",
    // "rn" = "rn",
    // "ro" = "ro",
    // "ru" = "ru",
    // "sa" = "sa",
    // "sc" = "sc",
    // "sd" = "sd",
    // "se" = "se",
    // "sm" = "sm",
    // "sg" = "sg",
    // "sr" = "sr",
    // "gd" = "gd",
    // "sn" = "sn",
    // "si" = "si",
    // "sk" = "sk",
    // "sl" = "sl",
    // "so" = "so",
    // "st" = "st",
    // "es" = "es",
    // "su" = "su",
    // "sw" = "sw",
    // "ss" = "ss",
    // "sv" = "sv",
    // "ta" = "ta",
    // "te" = "te",
    // "tg" = "tg",
    // "th" = "th",
    // "ti" = "ti",
    // "bo" = "bo",
    // "tk" = "tk",
    // "tl" = "tl",
    // "tn" = "tn",
    // "to" = "to",
    // "tr" = "tr",
    // "ts" = "ts",
    // "tt" = "tt",
    // "tw" = "tw",
    // "ty" = "ty",
    // "ug" = "ug",
    // "uk" = "uk",
    // "ur" = "ur",
    // "uz" = "uz",
    // "ve" = "ve",
    // "vi" = "vi",
    // "vo" = "vo",
    // "wa" = "wa",
    // "cy" = "cy",
    // "wo" = "wo",
    // "fy" = "fy",
    // "xh" = "xh",
    // "yi" = "yi",
    // "yo" = "yo",
    // "za" = "za",
}

export type Subcommand = {
    name: string;
    bot_perms?: Array<string>;
    usr_perms?: Array<string>;
    has_bot_cmd?: Boolean;
    has_svr_cmd?: Boolean;
    options?: Array<CommandOption>;
}
export type CommandOption = {
    name: string;
    required: Boolean;
}

export type SelectOption = {
    label: string;
    value: string;
    group?: string;
    default?: boolean;
}

export type VoteCard = {
    subId: string;
    appId: string;
    guildId: string;
    isDefault: boolean;
    background: string;
    accent_color: string;
    font_face: string;
    font_color: string;
    include_badge: boolean;
}
export type LeaderboardRow = {
    subId: string;
    appId: string;
    guildId: string;
    background: string;
    accent_color: string;
    username_color: string;
    avatar_decoration: string;
}

export type Profile = {
    id: string;
    isStaff: boolean;
    isSupport: boolean;
    isPartner: boolean;
    isIntegrator: boolean;
    isPremium: boolean;
    
    use_vote_card?: boolean;
    vote_cards?: VoteCard[];
    lb_rows?: LeaderboardRow[];

    show_custom_cards: boolean;
    show_custom_rows: boolean;

    theme?: "dark" | "light" | "sync";
    language?: string;

    blocked_from_platform_request?: boolean;
    blocked_from_integration_request?: boolean;
}

export type User = {
    discord: DiscordUser;
    profile: Profile;
}

export type Integration = {
    _id: string;
    created_by: string;
    created_at: Date;
    owners: string[];
    name: string;
    description?: string;
    icon?: string;
    accent_color?: string;
    website: string;
    privacy_policy: string;
    terms_of_service: string;
    api_token: string;
    global_scopes: string[];
    authed_scopes: string[];
    installable: boolean;
    public: boolean;
    testers?: string[];
    install_url?: string;
    provides?: {
        tagscript?: number;
        rewards?: number;
    }
    installs: number;
}


export type TrackerIntegrations_V1 = {
    leaderboard?: {
        web?: {
            enabled?: boolean;
            vanity?: string;
        };
        discord?: {
            enabled?: boolean;
            admin_only?: boolean;
        };
    };
    miki?: {
        enabled: boolean;
        token: string;
        exp: number;
        bucket?: string;
    };
}
export type TrackerIntegration = {
    id: string;
    linked_by: string;
    linked_at: Date;
    enabled: boolean;
    token?: string;
    data?: {
        [key: string]: any;
    };
}
export type TrackerLeaderboard = {
    discord: {
        enabled?: boolean;
        admin_only?: boolean;
    };
    web: {
        enabled?: boolean;
        short_url?: string;
    };
}
export type TrackerEmbed = {
    title?: string;
    url?: string;
    description: string;
    color: string;
    footer?: TrackerEmbedFooter;
    author?: TrackerEmbedAuthor;
    fields?: TrackerEmbedField[];
    timestamp?: Date;
    image?: string;
    thumbnail?: string;
}
export type TrackerEmbedFooter = {
    icon_url?: string;
    text: string;
}
export type TrackerEmbedAuthor = {
    icon_url?: string;
    name: string;
    url?: string;
}
export type TrackerEmbedField = {
    name: string;
    value: string;
    inline: boolean;
}
export type TrackerRole = {
    id: string;
    role: string;
    duration?: number;
    /**
     * @deprecated
     */
    type: "total" | "monthly";
    bucket: "total" | "all" | string;
    votes: number;
    name?: string;
}
export type TrackerPing = {
    type: "user" | "role";
    id: string;
}
export type TrackerBucketReset = {
    enabled: boolean;
    interval: number;
    unit: "day" | "week" | "fortnight" | "month" | "year";
}
export type TrackerBucket = {
    id: string;
    name: string;
    multiplier: number;
    reset_interval?: number;
    reset_data?: TrackerBucketReset;
    votes?: number;
}
export type TrackerWebhook = {
    enabled: boolean;
    url?: string;
    username?: string;
    icon_url?: string;
}
export type Tracker = {
    id: string;
    authorization: string;
    type: "guild" | "bot";
    platform: "topgg" | "dbl" | "dlist" | "discords" | "discordservers" | "disme" | "botlist" | "ibl" | "voidbots" | "topcord" | "disurl";
    guild: string;
    bot?: {
        id: string;
        avatar: string;
        username: string;
        tag: string;
    };
    cache?: {
        channel: string;
        primary_role?: string;
    };
    integrations: TrackerIntegration[];
    leaderboard: TrackerLeaderboard;
    channel: string;
    content: string;
    ping: boolean;
    invisible_pings: boolean;
    additonal_pings: TrackerPing[];
    embed: TrackerEmbed;
    role: string;
    role_duration: number;
    roles: TrackerRole[];
    isPremium: boolean;
    isOG: boolean;
    premium_user: string;
    buckets: TrackerBucket[];
    webhook?: TrackerWebhook;
}
export type App = {
    id: string;
    type: "bot" | "guild";
    name: string;
    icon_url: string;
    web_leaderboard?: boolean;
}

export type Guild = {
    id: string;
    name: string;
    icon: string;
    banner_url: string;
    description: string;
    permissions: GuildPermissions[];
    features: GuildFeatures[];
    owner_id: string;
    region: string;
    system_channel_id: string;
    verification_level: number;
    vanity_url_code: string;
    preferred_locale: string;
    nsfw: boolean;
    mfa_required: boolean;
}
export type GuildRole = {
    id: string;
    name: string;
    color: number;
    hex_color?: string;
    hoist: boolean;
    icon_url?: string;
    unicode_emoji?: string;
    position: number;
    permissions: number;
    managed: boolean;
    mentionable: boolean;
    tags?: GuildRoleTags;
    flags: GuildRoleFlags[];
}
export type GuildRoleTags = {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
    subscription_listing_id?: string;
    available_for_purchase?: null;
    guild_connections?: null;
}
export type GuildChannelOverwrite = {
    id: string;
    type: number;
    allow: number;
    allow_new: string;
    deny: number;
    deny_new: string;
}
export type GuildChannel = {
    id: string;
    type: number;
    guild_id: string;
    position: number;
    permission_overwrites: GuildChannelOverwrite[];
    name: string;
    topic?: string;
    nsfw: boolean;
    last_message_id?: string;
    /**
     * In voice only
     * @requires type = 2 | 13
     */
    bitrate?: number;
    /**
     * In voice only
     * @requires type = 2 | 13
     */
    user_limit?: number;
    rate_limit_per_user?: number;
    /**
     * In threads only
     * @requires type = 10 | 11 | 12
     */
    owner_id?: string;
    parent_id?: string;
    /**
     * In threads only
     * @requires type = 10 | 11 | 12
     */
    message_count?: number;
    /**
     * In threads only
     * @requires type = 10 | 11 | 12
     */
    member_count?: number;
    permissions?: GuildPermissions[];
}
export type GuildEmoji = {
    id: string;
    name: string;
    roles: string[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}
export type GuildMember = {
    nickname: string;
    user: User;
    roles: string[];
}

export enum GuildFeatures {
    "ANIMATED_BANNER" = "ANIMATED_BANNER",
    "ANIMATED_ICON" = "ANIMATED_ICON",
    "APPLICATION_COMMAND_PERMISSIONS_V2" = "APPLICATION_COMMAND_PERMISSIONS_V2",
    "AUTO_MODERATION" = "AUTO_MODERATION",
    "BANNER" = "BANNER",
    "COMMUNITY" = "COMMUNITY",
    "CREATOR_MONETIZABLE_PROVISIONAL" = "CREATOR_MONETIZABLE_PROVISIONAL",
    "CREATOR_STORE_PAGE" = "CREATOR_STORE_PAGE",
    "DEVELOPER_SUPPORT_SERVER" = "DEVELOPER_SUPPORT_SERVER",
    "DISCOVERABLE" = "DISCOVERABLE",
    "FEATURABLE" = "FEATURABLE",
    "INVITES_DISABLED" = "INVITES_DISABLED",
    "INVITE_SPLASH" = "INVITE_SPLASH",
    "MEMBER_VERIFICATION_GATE_ENABLED" = "MEMBER_VERIFICATION_GATE_ENABLED",
    "MORE_STICKERS" = "MORE_STICKERS",
    "NEWS" = "NEWS",
    "PARTNERED" = "PARTNERED",
    "PREVIEW_ENABLED" = "PREVIEW_ENABLED",
    "RAID_ALERTS_DISABLED" = "RAID_ALERTS_DISABLED",
    "ROLE_ICONS" = "ROLE_ICONS",
    "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE" = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
    "ROLE_SUBSCRIPTIONS_ENABLED" = "ROLE_SUBSCRIPTIONS_ENABLED",
    "TICKETED_EVENTS_ENABLED" = "TICKETED_EVENTS_ENABLED",
    "VANITY_URL" = "VANITY_URL",
    "VERIFIED" = "VERIFIED",
    "VIP_REGIONS" = "VIP_REGIONS",
    "WELCOME_SCREEN_ENABLED" = "WELCOME_SCREEN_ENABLED",
}
export enum GuildPermissions {
    "CREATE_INSTANT_INVITE" = "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS" = "KICK_MEMBERS",
    "BAN_MEMBERS" = "BAN_MEMBERS",
    "ADMINISTRATOR" = "ADMINISTRATOR",
    "MANAGE_CHANNELS" = "MANAGE_CHANNELS",
    "MANAGE_GUILD" = "MANAGE_GUILD",
    "ADD_REACTIONS" = "ADD_REACTIONS",
    "VIEW_AUDIT_LOG" = "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER" = "PRIORITY_SPEAKER",
    "STREAM" = "STREAM",
    "VIEW_CHANNEL" = "VIEW_CHANNEL",
    "SEND_MESSAGES" = "SEND_MESSAGES",
    "SEND_TTS_MESSAGES" = "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES" = "MANAGE_MESSAGES",
    "EMBED_LINKS" = "EMBED_LINKS",
    "ATTACH_FILES" = "ATTACH_FILES",
    "READ_MESSAGE_HISTORY" = "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE" = "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS" = "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS" = "VIEW_GUILD_INSIGHTS",
    "CONNECT" = "CONNECT",
    "SPEAK" = "SPEAK",
    "MUTE_MEMBERS" = "MUTE_MEMBERS",
    "DEAFEN_MEMBERS" = "DEAFEN_MEMBERS",
    "MOVE_MEMBERS" = "MOVE_MEMBERS",
    "USE_VAD" = "USE_VAD",
    "CHANGE_NICKNAME" = "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES" = "MANAGE_NICKNAMES",
    "MANAGE_ROLES" = "MANAGE_ROLES",
    "MANAGE_WEBHOOKS" = "MANAGE_WEBHOOKS",
    "MANAGE_GUILD_EXPRESSIONS" = "MANAGE_GUILD_EXPRESSIONS",
    "USE_APPLICATION_COMMANDS" = "USE_APPLICATION_COMMANDS",
    "REQUEST_TO_SPEAK" = "REQUEST_TO_SPEAK",
    "MANAGE_EVENTS" = "MANAGE_EVENTS",
    "MANAGE_THREADS" = "MANAGE_THREADS",
    "CREATE_PUBLIC_THREADS" = "CREATE_PUBLIC_THREADS",
    "CREATE_PRIVATE_THREADS" = "CREATE_PRIVATE_THREADS",
    "USE_EXTERNAL_STICKERS" = "USE_EXTERNAL_STICKERS",
    "SEND_MESSAGES_IN_THREADS" = "SEND_MESSAGES_IN_THREADS",
    "USE_EMBEDDED_ACTIVITIES" = "USE_EMBEDDED_ACTIVITIES",
    "MODERATE_MEMBERS" = "MODERATE_MEMBERS",
    "VIEW_CREATOR_MONETIZATION_ANALYTICS" = "VIEW_CREATOR_MONETIZATION_ANALYTICS",
    "USE_SOUNDBOARD" = "USE_SOUNDBOARD",
    "CREATE_GUILD_EXPRESSIONS" = "CREATE_GUILD_EXPRESSIONS",
    "CREATE_EVENTS" = "CREATE_EVENTS",
    "USE_EXTERNAL_SOUNDS" = "USE_EXTERNAL_SOUNDS",
    "SEND_VOICE_MESSAGES" = "SEND_VOICE_MESSAGES",
}
export enum GuildRoleFlags {
    "IN_PROMPT" = "IN_PROMPT"
}