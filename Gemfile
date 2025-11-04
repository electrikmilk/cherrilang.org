source 'https://rubygems.org'

gem "jekyll"
# Pin a stable sass-embedded version to avoid CI install issues with latest releases
# jekyll-sass-converter (~> 3) depends on sass-embedded, and some newest builds
# occasionally lack precompiled binaries for GitHub Actions images right after release.
# Version 1.77.x has widely available binaries across Linux/macOS runners.
# Note: use "~> 1.77.0" (not "~> 1.77") to constrain to 1.77.x only.
# See: https://github.com/sass/dart-sass-embedded/releases

gem "sass-embedded", "~> 1.77.0"

gem "just-the-docs"
