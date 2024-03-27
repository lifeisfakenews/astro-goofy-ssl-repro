export enum FrontMatter {
    "code" = "en",
    "name" = "English"
}


export enum ConfirmActions {
    "confirm" = "Continue",
    "cancel" = "Nevermind"
}

export enum General {
    "footer_copyright" = "Copyright",
    "footer_legal" = "All rights reserved",
    "footer_disclaimer" = "Not affiliated with Discord Inc",
    "tag_line_line_1" = "Track, log & reward votes",
    "tag_line_line_2" = "Automatically",
}

export enum SEO {
    "title" = "Vote Manager",
    "site_name" = "Vote Manager",
    "description" = "Our Integration Portal allows you to manage your integrations easily"
}

export enum Themes {
    "sync" = "System",
    "dark" = "Dark",
    "light" = "Light",
}

export enum Labels {
    "footer" = "Footer",
    "primary" = "Primary",
    "loading_account_info" = "Loading account details",
    "open_user_dropdown" = "Open user dropdown",
    "user_avatar" = "User's avatar",
}


export enum NavHeadings {
    /* acc drop */
    "general" = "General",
    "requests" = "Requests",
    "contribute" = "Contribute",
    /* footer */
    "vm" = "Vote Manager",
    "resources" = "Resources",
}
export enum NavLinks {
    /* header / footer */
    "create" = "New Integration",
    "integrations" = "Integrations",
    "docs" = "Documentation",
    /* acc drop */
    "leaderboards" = "Leaderboards",
    "dashboard" = "Dashboard",
    "request_platform" = "Request Platform",
    "request_integration" = "Request Integration",
    "submit_template" = "Submit Template",
    "support_server" = "Support Server",
    "logout" = "Log Out",
    /* footer */
    "theme" = "Appearance",
    "lang" = "Language",
    "premium" = "Premium",
    "features" = "Features",
    "commands" = "Commands",
    "templates" = "Templates",
    "platforms" = "Platforms",
    "invite" = "Invite",
    "discord" = "Support Server",
    "status" = "Status",
    "tos" = "Terms of Service",
    "privacy" = "Privacy Policy",
    "cookies" = "Cookie Policy",
}

export enum NotFoundPage {
    "title" = "Not Found",
    "description" = "We can't find the requested page. Maybe you made a typo?",
    "report" = "Think something's wrong? [Let us know](https://votemanager.xyz/discord)",
    "go_home" = "Go Home",
    "go_back" = "Go Back"
}

export enum HomePage {
    "title" = "VM Integrations",
    "description" = "Welcome to Vote Manager Integrations",
    "card_integration_title" = "Integrations Portal",
    "card_integration_content" = "Easily manage your integrations in our Integrations Portal",
    "card_documentation_title" = "Documentation",
    "card_documentation_content" = "Check our documentation to learn more the APIs available"
}

export enum CreatePage {
    "title" = "Create Integration",
    "description" = "Create an integration",

    "create_name" = "Name",
    "create_description" = "Description",
    "create_website" = "Website",
    "create_privacy_policy" = "Privacy Policy",
    "create_terms_of_service" = "Terms of Service",
    "create_installable" = "Installable",
    "create_public" = "Public Integration",
    "create_install_url" = "Installation URL",
    "create_owners" = "Owners",
    "create_submit" = "Create Integration",
}

export enum IntegrationsPage {
    "title" = "Integrations Portal",
    "description" = "Easily manage your integrations in our Integrations Portal"
}

export enum IntegrationScopes {
    "trackers.*" = "Trackers",
    "trackers.read" = "View Trackers",
    "trackers.sensitive" = "View Tracker Tokens",
    "trackers.write" = "Edit Trackers",
    "trackers.create" = "Create Trackers",
    "trackers.delete" = "Delete Trackers",
    "trackers.integrations" = "Edit Tracker Integrations",

    "votes.*" = "Votes",
    "votes.read" = "Read Votes",
    "votes.write" = "Empty Buckets",
    "votes.user" = "Read User Votes",

    "users.*" = "Users",
    "users.read" = "Read Users",
    "users.write" = "Update Users",
    "users.premium" = "View User's Premium Status",
}
export enum IntegrationPage {
    "installs" = "installs",
    "copy_id" = "Copy ID",

    "save_changes" = "Save Changes",

    "scopes_title" = "Active Scopes",
    "scopes_subtext" = "To get access to more scopes, please request them in your Integration's channel in our Discord Server",
    "scopes_authed" = "Authed Scopes",
    "scopes_global" = "Global Scopes",

    "edit_title" = "Edit Integration",
    "edit_name" = "Name",
    "edit_description" = "Description",
    "edit_icon" = "Icon",
    "edit_icon_upload" = "Upload Image",
    "edit_color" = "Accent Colour",
    "edit_website" = "Website",
    "edit_privacy_policy" = "Privacy Policy",
    "edit_terms_of_service" = "Terms of Service",

    "token_title" = "API Token",
    "token_subtext" = "This API Token allows your Integration to interact with our API",
    "token_view" = "Show/Hide",
    "token_copy" = "Copy",
    "token_copied" = "Copied",
    "token_reset" = "Regenerate",

    "owners_title" = "Integration Owners",
    "owners_subtext" = "Add additional owners to your Integration. Owners have the same permission as you, and can remove you and other owners",
    "owners_owners" = "Owners",
    "owners_owners_subtext" = "You cannot remove yourself. Only add people you trust",

    "install_title" = "Installation Settings",
    "install_subtext" = "Installable Integrations can be enabled through the Dashboard for individiual trackers",
    "install_enabled" = "Installable Integration",
    "install_public" = "Public Integration",
    "install_public_subtext" = "Allow all users can install your Integration",
    "install_testers" = "Testers",
    "install_testers_subtext" = "Allow certain users to install your Integration, even while Public Integration is disabled. Owners & VM Staff are included by default",
    "install_url" = "Installation URL",
    "install_url_subtext" = "If your Integration requires a diffrent or additional installation flow, e.g. OAuth2, add that URL here",
    "install_url_callback_hint" = "If your Integration's flow requires a callback URL, please use the following URL:",
    "install_url_callback_encoded" = "URL Encoded Format",
    "install_url_callback_copy" = "Copy URL",
    "install_provides" = "Provided Features",
    "install_provides_subtext" = "What additional features does your Integration unlock",
    "install_provides_tagscript" = "TagScript tags",
    "install_provides_rewards" = "extra reward types",

    "confirm_token_title" = "Are you sure?",
    "confirm_token_content" = "You are about to reset your Integration's API Token. This means that API calls won't work until you update your code with the new token"
}
