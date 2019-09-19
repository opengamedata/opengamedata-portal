.PHONY: deploy

deploy:
	rsync -vrc * mli-field@fielddaylab.wisc.edu:/httpdocs/studies/lakeland --exclude-from rsync-exclude
