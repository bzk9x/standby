### Standby Theme Creation Documentation

Creating a custom theme for the Standby app involves modifying the CSS file, adding custom fonts, and incorporating new images. This guide will walk you through the steps required to create your own theme, the necessary file structure, and the manifest details.

#### **Theme File Structure**

Each theme should follow the directory structure below:

```
your-theme-folder/
│
├── fonts/
│   └── (Your custom font files, e.g., .ttf, .woff)
│
├── images/
│   └── (Your custom image files, e.g., .png, .jpg)
│
├── manifest.json
│
├── style.css
│
└── theme_icon.png
```

- **`fonts/`**: This folder contains any custom font files used in your theme. Fonts are referenced in the CSS file via `@font-face`.
- **`images/`**: This folder holds custom images such as background images or icons. They can be used in your CSS for styling purposes.
- **`manifest.json`**: This file contains metadata about the theme, such as the version, name, description, and author.
- **`style.css`**: The primary CSS file where you’ll apply your styles to modify the appearance of the Standby app.
- **`theme_icon.png`**: An icon that visually represents your theme. This image might be used in a theme selector UI. (I haven't built it)

#### **Manifest File Structure**

The `manifest.json` file provides essential details about your theme. Below is the structure:

```json
{
    "theme_version": "1.0",
    "theme_name": "Default",
    "theme_description": "Default look of standby.",
    "theme_author": "bzk9x",
    "theme_website": ""
}
```

- **`theme_version`**: The version number of your theme.
- **`theme_name`**: The name of your theme.
- **`theme_description`**: A brief description of your theme.
- **`theme_author`**: The author of the theme.
- **`theme_website`**: (Optional) A link to your website or profile.

#### **Modifiable IDs and Classes**

You can modify the following IDs and classes in the `style.css` file to change the look and feel of the Standby app.

##### **Clock IDs**
- **`#clock-container`**: The main container for the clock and its elements. You can adjust its size, position, and background.
- **`#clock`**: The container for the clock digits. You can modify its font, size, spacing, and transform properties.
- **`#hour-digit-1`, `#hour-digit-2`, `#minute-digit-1`, `#minute-digit-2`**: Individual digits for the hour and minute. Adjust their colors, z-index, transforms, and more.
- **`#colon`**: The colon between hour and minute digits. Its color, position, and styling can be modified.

##### **Date IDs**
- **`#date-container`**: The container for the date. You can change its font, color, and position.
- **`#date`**: The date text itself. Apply font, size, and color changes here.

##### **Menu Bar IDs**
- **`#menu-bar`**: The container for the menu bar. Modify its background color, shadow, opacity, and position.
- **`#title`**: The title text within the menu bar. Adjust its font, size, and position.
- **`#menu-icons`**: The container for menu icons. Modify the position and spacing of icons here.
- **`#settings-icon`**: The settings icon. Customize its size, hover effects, and rotation.

##### **Hotkey Hint IDs**
- **`#hotkey-hint`**: The container for the hotkey hint. You can modify its visibility, position, and opacity transitions.
- **`#hotkey-hint.visible`**: A class applied to show the hotkey hint. This class is essential for fading the hint in and out.

##### **General Classes**
- **`.clock-digit`**: A general class applied to all clock digits. Use this to modify the overall style of digits, including text-shadow and opacity.
- **`.menu-icon`**: A class applied to all icons in the menu bar. Use this to standardize the size and spacing of icons.

#### **Adding Custom Fonts**
To add a custom font, place your font files in the `fonts/` directory and reference them in `style.css` using `@font-face`. Here’s an example:

```css
@font-face {
    font-family: "YourFontName";
    src: url("fonts/YourFontFile.ttf");
}

body {
    font-family: "YourFontName", sans-serif;
}
```

#### **Adding Custom Images**
Custom images can be placed in the `images/` directory. Reference them in your `style.css` like this:

```css
#clock-container {
    background-image: url("images/your-background.png");
    background-size: cover;
}
```

#### **Example of a Custom Theme**
Here’s a basic example to illustrate the creation of a theme:

1. **Directory Structure**:
    ```
    my-custom-theme/
    ├── fonts/
    │   └── MyCustomFont.ttf
    ├── images/
    │   └── custom-background.png
    ├── manifest.json
    ├── style.css
    └── theme_icon.png
    ```

2. **Manifest** (`manifest.json`):
    ```json
    {
        "theme_version": "1.0",
        "theme_name": "Night Mode",
        "theme_description": "A dark theme for Standby.",
        "theme_author": "YourName",
        "theme_website": "https://yourwebsite.com"
    }
    ```

3. **CSS** (`style.css`):
    ```css
    @font-face {
        font-family: "MyCustomFont";
        src: url("fonts/MyCustomFont.ttf");
    }

    body {
        font-family: "MyCustomFont", sans-serif;
        background-color: #121212;
        color: #e0e0e0;
    }

    #clock-container {
        background-image: url("images/custom-background.png");
        background-size: cover;
    }

    #hour-digit-1, #hour-digit-2, #minute-digit-1, #minute-digit-2 {
        color: #e0e0e0;
    }
    ```
