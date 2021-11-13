PNG:=icon128.png icon96.png icon64.png icon48.png icon32.png icon16.png
all : $(PNG)

icon128.png : icon.svg Makefile
	inkscape -z -e $@ -w 128 -h 128 $<
	# For inkscape 1.0:
	#inkscape -w 128 -h 128 $< -o $@

icon96.png : icon.svg Makefile
	inkscape -z -e $@ -w 96 -h 96 $<
icon64.png : icon.svg Makefile
	inkscape -z -e $@ -w 64 -h 64 $<
icon48.png : icon.svg Makefile
	inkscape -z -e $@ -w 48 -h 48 $<
icon32.png : icon.svg Makefile
	inkscape -z -e $@ -w 32 -h 32 $<
icon16.png : icon.svg Makefile
	inkscape -z -e $@ -w 16 -h 16 $<

clean :
	rm -f -- $(PNG)
