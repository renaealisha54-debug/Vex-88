fun runGradleBuild(projectPath: File, task: String) {
    val process = ProcessBuilder("./gradlew", task)
        .directory(projectPath)
        .redirectErrorStream(true)
        .start()

    // Read the output stream to show build progress in your IDE console
    val reader = BufferedReader(InputStreamReader(process.inputStream))
    reader.forEachLine { line ->
        println("Build Output: $line") // Pipe this to your IDE's UI Console
    }
    
    val exitCode = process.waitFor()
    if (exitCode == 0) {
        println("Build Successful")
    } else {
        println("Build Failed with code $exitCode")
    }
}
