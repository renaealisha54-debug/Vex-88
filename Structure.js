/Vex
  /app
    /src
      /main
        /java/com/yourpackage/vex/
          /editor/         <-- CodeEditor logic (using CodeView library)
          /compiler/       <-- ProcessBuilder wrappers for Gradle/Java
          /overlay/        <-- OverlayService and WindowManager logic
          /ui/             <-- Main activity, file explorer, settings
          /util/           <-- AppConfig and helper classes
        /assets/           <-- Place toolchains here (openjdk.zip, gradle.zip)
        /res/              <-- Layouts, themes, icons
    /build.gradle          <-- Dependencies (CodeView, etc.)
  /.gitignore              <-- Ignore build directories and local properties
  README.md                <-- Project documentation
