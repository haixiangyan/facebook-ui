let exportAllIcons = (requireContext) => requireContext.keys().forEach(requireContext)

try {
    exportAllIcons(require.context('./', true, /\.svg$/))
} catch (error) {
}